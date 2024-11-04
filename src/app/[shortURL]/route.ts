import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { shortURL: string } }) {
    const shortURLOrSlug = params.shortURL;
    console.log(shortURLOrSlug);    

    const URLBySlug = await prisma.uRL.findFirst({
        where: {
            slug: shortURLOrSlug,
        },
    });

    if (URLBySlug) {
        return NextResponse.redirect(URLBySlug.longURL);
    }

    const URLByShortURL = await prisma.uRL.findFirst({
        where: {
            shortURL: shortURLOrSlug,
        },
    });

    if (URLByShortURL) {
        return NextResponse.redirect(URLByShortURL.longURL);
    }

    // Return a 404 response if no URL is found
    return NextResponse.json({ message: "URL not found" }, { status: 404 });
}
