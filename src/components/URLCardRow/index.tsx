import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tag, URL } from "@prisma/client";
import { Button } from "../ui/button";
import { Copy, Trash, QrCode, CornerDownRight, Pointer } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";

const URLCardRow = ({ url }: { url: URL & { tags: Tag[] } }) => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              {url.slug ? (
                <a
                  href=""
                  className="font-bold"
                >{`https://shortme.dev/${url.slug}`}</a>
              ) : (
                <a
                  href=""
                  className="font-bold"
                >{`https://shortme.dev/${url.shortURL}`}</a>
              )}
              <div className="flex items-center">
                <Button variant="ghost" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <QrCode className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex">
                <CornerDownRight className="w-3" />
                <div>{url.longURL}</div>
              </div>
              <Avatar className="w-5 h-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="font-bold">Oct 29</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <HoverCard>
            <HoverCardTrigger className="text-white bg-primaryButton p-2 rounded-md">{url.tags[0]?.name ?? "No Tags"}</HoverCardTrigger>
            <HoverCardContent>
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
          <Button variant="outline">
            <Pointer className="w-5 mr-2"/>
            <div>clicks {url.clicks}</div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default URLCardRow;
