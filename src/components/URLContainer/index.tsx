import { BarChart, Copy, Edit, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { URL } from "@prisma/client";

export interface URLContainerProps {
  url: URL;
}
const URLCard = ({ url }: URLContainerProps) => {
  return (
    <Card
      key={url.id}
      className="border-2 border-b-4 border-r-4 border-primaryBorder"
    >
      <CardContent className="pt-6">
        {/* URL Name */}
        <div className="mb-1 text-2xl font-semibold text-gray-800 truncate">
          Title
        </div>

        <div className="flex items-center justify-between mb-2">
          {url.slug ? (
            <a
              href=""
              className="font-medium"
            >{`https://shortme.dev/${url.slug}`}</a>
          ) : (
            <a
              href=""
              className="font-medium"
            >{`https://shortme.dev/${url.shortURL}`}</a>
          )}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy short URL</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
              <span className="sr-only">Edit URL</span>
            </Button>
            <Button variant="ghost" size="icon">
              <QrCode className="h-4 w-4" />
              <span className="sr-only">Show QR code</span>
            </Button>
          </div>
        </div>

        {/* Long URL */}
        <p className="text-sm text-muted-foreground truncate">{url.longURL}</p>
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <Button
            variant="secondary"
            size="sm"
            className="text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <BarChart className="h-3 w-3 mr-1" />
            {url.clicks} clicks
          </Button>
          <span>Created: {new Date(url.createdAt).toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default URLCard;
