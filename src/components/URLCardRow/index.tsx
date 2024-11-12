import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tag, URL } from "@prisma/client";
import { Button } from "../ui/button";
import {
  Copy,
  Trash,
  QrCode,
  CornerDownRight,
  Pointer,
  Tag as IconTag,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const URLCardRow = ({ url }: { url: URL & { tags: Tag[] } }) => {
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
              {url.slug ? (
                <a
                  href={`http://localhost:3000/${url.slug}`}
                  className="font-bold"
                >{`http://localhost:3000/${url.slug}`}</a>
              ) : (
                <a
                  href={`http://localhost:3000/${url.shortURL}`}
                  className="font-bold"
                >{`http://localhost:3000/${url.shortURL}`}</a>
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
              <div className="font-bold flex-shrink-0">Oct 29</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <HoverCard>
            <HoverCardTrigger className="flex items-center px-3 py-1 space-x-2 w-[120px] rounded-sm border border-blue-300 bg-blue-50 text-blue-600">
            <IconTag className="w-4 h-4 text-blue-600" />
            <span className="font-medium">{url.tags[0]?.name ?? "No Tags"}</span>
            {url.tags.length >= 1 && <span className="ml-auto text-blue-600"> | +{url.tags.length-1}</span>}
            </HoverCardTrigger>
            {url.tags.length > 1 && (
              <HoverCardContent className="w-fit space-y-2">
                {url.tags.map((tag, index) => {
                  if (index >= 1)
                    return (
                      <div key={tag.id} className="px-3 py-1 space-x-2 w-[120px] rounded-sm border border-blue-300 bg-blue-50 text-blue-600">
                       {tag.name}
                      </div>
                    );
                })}
              </HoverCardContent>
            )}
          </HoverCard>
          <Button variant="outline">
            <Pointer className="w-5 mr-2" />
            <div>clicks {url.clicks}</div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default URLCardRow;
