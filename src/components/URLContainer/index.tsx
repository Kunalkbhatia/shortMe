import { BarChart, Copy, Edit, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const urls = [
    {
      id: 1,
      shortUrl: "https://short.url/abc123",
      longUrl: "https://www.example.com/very/long/url/that/needs/shortening",
      clicks: 42,
      createdAt: "2023-04-15T10:30:00Z",
    },
    {
      id: 2,
      shortUrl: "https://short.url/def456",
      longUrl: "https://another.example.com/another/long/url/to/be/shortened",
      clicks: 17,
      createdAt: "2023-04-16T14:45:00Z",
    },
    {
      id: 3,
      shortUrl: "https://short.url/ghi789",
      longUrl: "https://third.example.com/yet/another/long/url/for/demonstration",
      clicks: 31,
      createdAt: "2023-04-17T09:20:00Z",
    },
    {
        id: 1,
        shortUrl: "https://short.url/abc123",
        longUrl: "https://www.example.com/very/long/url/that/needs/shortening",
        clicks: 42,
        createdAt: "2023-04-15T10:30:00Z",
      },
      {
        id: 2,
        shortUrl: "https://short.url/def456",
        longUrl: "https://another.example.com/another/long/url/to/be/shortened",
        clicks: 17,
        createdAt: "2023-04-16T14:45:00Z",
      },
      {
        id: 3,
        shortUrl: "https://short.url/ghi789",
        longUrl: "https://third.example.com/yet/another/long/url/for/demonstration",
        clicks: 31,
        createdAt: "2023-04-17T09:20:00Z",
      },
      {
        id: 1,
        shortUrl: "https://short.url/abc123",
        longUrl: "https://www.example.com/very/long/url/that/needs/shortening",
        clicks: 42,
        createdAt: "2023-04-15T10:30:00Z",
      },
      {
        id: 2,
        shortUrl: "https://short.url/def456",
        longUrl: "https://another.example.com/another/long/url/to/be/shortened",
        clicks: 17,
        createdAt: "2023-04-16T14:45:00Z",
      },
      {
        id: 3,
        shortUrl: "https://short.url/ghi789",
        longUrl: "https://third.example.com/yet/another/long/url/for/demonstration",
        clicks: 31,
        createdAt: "2023-04-17T09:20:00Z",
      },
      {
        id: 1,
        shortUrl: "https://short.url/abc123",
        longUrl: "https://www.example.com/very/long/url/that/needs/shortening",
        clicks: 42,
        createdAt: "2023-04-15T10:30:00Z",
      },
      {
        id: 2,
        shortUrl: "https://short.url/def456",
        longUrl: "https://another.example.com/another/long/url/to/be/shortened",
        clicks: 17,
        createdAt: "2023-04-16T14:45:00Z",
      },
      {
        id: 3,
        shortUrl: "https://short.url/ghi789",
        longUrl: "https://third.example.com/yet/another/long/url/for/demonstration",
        clicks: 31,
        createdAt: "2023-04-17T09:20:00Z",
      },
  ]

const URLContainer = () => {
  return (
    <div className="flex-1 max-h-[520px] overflow-y-auto hide-scrollbar p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
       
        {urls.map((url) => (
          <Card key={url.id} className="border-2 border-b-4 border-r-4 border-primaryBorder">
          <CardContent className="pt-6">
            {/* URL Name */}
            <div className="mb-1 text-2xl font-semibold text-gray-800 truncate">
              Title
            </div>
        
            <div className="flex items-center justify-between mb-2">
              {/* Short URL */}
              <span className="font-medium">{url.shortUrl}</span>
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
            <p className="text-sm text-muted-foreground truncate">{url.longUrl}</p>
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
        
        ))}
      </div>
  );
};

export default URLContainer;
