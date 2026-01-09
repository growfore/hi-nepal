"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const STARS = [0, 1, 2, 3, 4];

export interface ReviewCardProps {
  user: {
    name: string;
    avatar?: string;
    contributionsCount: number;
  };
  rating: number;
  title: string;
  date: string;
  tripType: string;
  content: string;
  likesCount: number;
  isLiked?: boolean;
  onLike?: () => void;
  className?: string;
}

export function ReviewCard({
  user,
  rating,
  title,
  date,
  tripType,
  content,
  className,
}: Readonly<ReviewCardProps>) {
  const renderStars = () => {
    return STARS.map((i) => (
      <div
        key={i}
        className={cn(
          "w-4 h-4 rounded-full",
          i < rating ? "bg-green-600" : "bg-gray-200"
        )}
      />
    ));
  };

  return (
    <Card className={cn("w-full rounded-sm shadow-none", className)}>
      <CardContent className="p-2 md:p-6">
        {/* Header with user info and actions */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-gray-600 text-white font-medium">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-gray-900">{user.name}</h3>
          </div>
        </div>

        {/* Star rating */}
        <div className="flex items-center gap-1 mb-3">{renderStars()}</div>

        {/* Review title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>

        {/* Date and trip type */}
        <p className="text-gray-600 mb-4">
          {date} • {tripType}
        </p>

        {/* Review content */}
        <div className="text-gray-700 leading-relaxed space-y-4">
          {content.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
