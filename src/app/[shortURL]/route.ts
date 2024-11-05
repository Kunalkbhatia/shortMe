  import prisma from "@/lib/db";
import { Analytics } from "@prisma/client";
import { permanentRedirect, redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";

export async function GET(
  request: NextRequest,
  { params }: { params: { shortURL: string } }
) {
  const shortURLOrSlug = params.shortURL;
  const userAgent = request.headers.get("user-agent");
  const details = UAParser(userAgent as string);

  const URLBySlug = await prisma.uRL.findFirst({
    where: {
      slug: shortURLOrSlug,
    },
    include: {
      analyticsData: true
    }
  });

  if (URLBySlug) {
    if (URLBySlug.monitoring === true) {
      if(URLBySlug.analyticsData)
        trackAnalytics(details, URLBySlug.analyticsData);
      return redirect(URLBySlug.longURL);
    } else {
      return permanentRedirect(URLBySlug.longURL);
    }
  }
  const URLByShortURL = await prisma.uRL.findFirst({
    where: {
      shortURL: shortURLOrSlug,
    },
    include: {
      analyticsData : true,
    }
  });

  if (URLByShortURL) {
    if (URLByShortURL.monitoring === true) {
      if(URLByShortURL.analyticsData)
        trackAnalytics(details, URLByShortURL.analyticsData);  
      return redirect(URLByShortURL.longURL);
    }
    return permanentRedirect(URLByShortURL.longURL);
  }

  // Return a 404 response if no URL is found
  return NextResponse.json({ message: "URL not found" }, { status: 404 });
}

const trackAnalytics = async (data: UAParser.IResult, analyticsData: Analytics) => {
  console.log("tracking data");
  const browser = data.browser.name ?? "Other";
  const os = data.os.name ?? "Other";
  const deviceType = data.device.type ?? "Desktop";
  console.log(os);
  const clicksOnMobile = deviceType === "mobile" ? analyticsData.clicksOnMobile+1 : analyticsData.clicksOnMobile;
  const clicksOnDesktop = deviceType === "Desktop" ? analyticsData.clicksOnDesktop+1 : analyticsData.clicksOnDesktop;
  const clicksOnTablet  = deviceType === "tablet" ? analyticsData.clicksOnTablet+1 : analyticsData.clicksOnTablet;
  const clicksOnChrome  = browser === "Chrome" ? analyticsData.clicksOnChrome+1 : analyticsData.clicksOnChrome;
  const clicksOnEdge    = browser === "Edge" ? analyticsData.clicksOnEdge+1 : analyticsData.clicksOnEdge;   
  const clicksOnSafari  = browser === "Safari" ? analyticsData.clicksOnSafari+1 : analyticsData.clicksOnSafari;   
  const clicksOnFireFox = browser === "Firefox" ? clicksOnSafari+1 : analyticsData.clicksOnSafari;   
  const clicksOnOtherBrowsers = browser === "Other" ? analyticsData.clicksOnOtherBrowsers+1 : analyticsData.clicksOnOtherBrowsers;
  const clicksOnAndroid = os === "Android" ? analyticsData.clicksOnAndroid+1 : analyticsData.clicksOnAndroid;    
  const clicksOnIOS = os === "iOS" ? analyticsData.clicksOnIOS+1 : analyticsData.clicksOnIOS;        
  const clicksOnLinux = os === "Linux" ? analyticsData.clicksOnLinux+1 : analyticsData.clicksOnLinux;     
  const clicksOnWindows = os === "Windows" ? analyticsData.clicksOnWindows+1 : analyticsData.clicksOnWindows;     
  const clicksOnMacOs = os === "macOS" ? analyticsData.clicksOnMacOs+1 : analyticsData.clicksOnMacOs;     
  const clicksOnOtherOs = os === "Other" ? analyticsData.clicksOnOtherOs+1 : analyticsData.clicksOnOtherOs;

  await prisma.analytics.update({
    data: {
      clicksOnAndroid,
      clicksOnChrome,
      clicksOnDesktop,
      clicksOnEdge,
      clicksOnFireFox,
      clicksOnIOS,
      clicksOnLinux,
      clicksOnMobile,
      clicksOnOtherBrowsers,
      clicksOnOtherOs,
      clicksOnSafari,
      clicksOnTablet,
      clicksOnWindows,
      clicksOnMacOs,
      totalClicks: analyticsData.totalClicks + 1,
    },
    where: {
      urlId: analyticsData.urlId,
    }
  })
};
