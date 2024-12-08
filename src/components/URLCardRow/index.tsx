"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tag, URL } from "@prisma/client";
import { Button } from "../ui/button";
import {
  Copy,
  Trash,
  QrCode as Qr,
  CornerDownRight,
  Pointer,
  Tag as IconTag,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { useToast } from "@/hooks/use-toast";
import { deleteURL } from "@/actions/urlActions";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import QRCode from "react-qr-code";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { BrowserChart } from "../Charts/BrowserChart";
import { DeviceChart } from "../Charts/DeviceChart";
import { PlatformChart } from "../Charts/PlatformChart";
import { format } from "date-fns";


const URLCardRow = ({ url }: { url: URL & { tags: Tag[] } }) => {
  const { toast } = useToast();
  const URL = url.slug
    ? `https://www.shortme.fun/${url.slug}`
    : `https://www.shortme.fun//${url.shortURL}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(URL);
    toast({
      title: "URL copied!",
    });
  };

  const handleDelete = async () => {
    const error = await deleteURL(url);
    if (error instanceof Error) {
      toast({
        title: error.message,
      });
    } else {
      toast({
        title: "URL Deleted",
      });
    }
  };


  const formattedDate = format(new Date(url.createdAt), "MMM dd");
  return (
    <Card>
      <CardContent className="flex flex-wrap items-center justify-between pt-2 gap-5">
        <div className="flex items-center gap-2">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <a href={URL} className="font-bold">
                {URL}
              </a>
              <div className="flex items-center">
                <Button onClick={handleCopy} variant="ghost" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button onClick={handleDelete} variant="ghost" size="icon">
                  <Trash className="h-4 w-4" />
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Qr className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-fit">
                    <QRCode value={URL} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex items-center max-w-[200px] sm:max-w-[300px] overflow-hidden whitespace-nowrap">
                <CornerDownRight className="w-3 flex-shrink-0" />
                <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                  {url.longURL}
                </div>
              </div>
              <Avatar className="w-5 h-5 flex-shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="font-bold flex-shrink-0">{formattedDate}</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <HoverCard>
            <HoverCardTrigger className="flex items-center px-3 py-1 space-x-2 min-w-[120px] rounded-sm border border-blue-300 bg-blue-50 text-blue-600">
              <IconTag className="w-4 h-4 text-blue-600" />
              <span className="font-medium">
                {url.tags[0]?.name ?? "No Tags"}
              </span>
              {url.tags.length >= 1 && (
                <span className="ml-auto text-blue-600">
                  {" "}
                  | +{url.tags.length - 1}
                </span>
              )}
            </HoverCardTrigger>
            {url.tags.length > 1 && (
              <HoverCardContent className="w-fit space-y-2">
                {url.tags.map((tag, index) => {
                  if (index >= 1)
                    return (
                      <div
                        key={tag.id}
                        className="px-3 py-1 space-x-2 w-[120px] rounded-sm border border-blue-300 bg-blue-50 text-blue-600"
                      >
                        {tag.name}
                      </div>
                    );
                })}
              </HoverCardContent>
            )}
          </HoverCard>
          <Drawer>
          <DrawerTrigger className="flex items-center space-x-3 px-3 py-1 w-[100px] rounded-sm border border-primaryButton bg-primaryButton/10 text-primaryButton hover:bg-primaryButton/20 transition-colors duration-300">
  <Pointer className="w-5 h-5 text-primaryButton" />
  <div className="text-lg font-semibold text-primaryButton">{url.clicks}</div>
</DrawerTrigger>

            <DrawerContent className="h-[700px] md:h-[500px]">
              <DrawerHeader className="flex flex-col justify-center items-center">
                <DrawerTitle className="text-3xl">Aanlytics</DrawerTitle>
                <DrawerDescription>
                 {URL}
                </DrawerDescription>
              </DrawerHeader>
              <div className="font-bold text-2xl mx-5">Total Clicks: {url.clicks}</div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-5 overflow-auto">
                <BrowserChart id={url.id} />
                <DeviceChart />
                <PlatformChart id={url.id} />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </CardContent>
    </Card>
  );
};

export default URLCardRow;
