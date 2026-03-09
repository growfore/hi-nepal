"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TSeo } from "@/utils/type";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SeoFields({
  seoData,
  setSeoData,
}: {
  seoData: TSeo;
  setSeoData: React.Dispatch<React.SetStateAction<TSeo>>;
}) {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setSeoData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "metaDescription") {
      setMetaDescriptionLength(value.length);
    }
    if (name === "metaTitle") {
      setMetaTitleLength(value.length);
    }
  };

  const [metaTitleLength, setMetaTitleLength] = useState(
    seoData.metaTitle?.length ?? 0,
  );
  const [metaDescriptionLength, setMetaDescriptionLength] = useState(
    seoData.metaDescription?.length ?? 0,
  );

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setSeoData((prev) => ({ ...prev, ogImage: file }));
    }
  };

  return (
    <Card className="w-full  mx-auto">
      <CardHeader>
        <CardTitle>SEO Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <div className="space-y-2 w-full">
              <Label
                htmlFor="metaTitle"
                className="flex items-center justify-between"
              >
                Meta Title
                <div
                  className={cn(
                    "text-orange-400 text-sm flex justify-self-end",
                    metaTitleLength > 60 && "text-red-500",
                  )}
                >
                  Metatitle Character Count: {metaTitleLength}/60
                </div>
              </Label>
              <Input
                id="metaTitle"
                name="metaTitle"
                value={seoData.metaTitle}
                placeholder="Optimal Metatitle Character Length is 50-60"
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="ogTitle">OG Title</Label>
              <Input
                id="ogTitle"
                name="ogTitle"
                value={seoData.metaTitle}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="space-y-2">
              <Label htmlFor="metaDescription">Meta Description</Label>
              <Textarea
                id="metaDescription"
                name="metaDescription"
                placeholder="Optimal Meta Description Character Length is 150-160"
                value={seoData.metaDescription}
                onChange={handleInputChange}
              />
              <div
                className={cn(
                  "text-orange-400 text-sm flex justify-self-end",
                  metaDescriptionLength > 160 && "text-red-500",
                )}
              >
                Meta Description Character Count: {metaDescriptionLength}/160
              </div>
            </div>
            <Label htmlFor="schema">Schema</Label>
            <Textarea
              id="schema"
              name="schema"
              value={seoData.schema}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ogDescription">OG Description</Label>
            <Textarea
              id="ogDescription"
              name="ogDescription"
              value={seoData.metaDescription}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2 lg:w-2/3">
            <Label htmlFor="image">Image</Label>
            <Input
              id="ogImage"
              name="ogImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {seoData.metaImage && (
              <img
                src={
                  typeof seoData.metaImage === "string"
                    ? seoData.metaImage
                    : URL.createObjectURL(seoData.metaImage) || ""
                }
                alt="Category"
                className="mt-2 max-w-full h-auto"
                style={{ maxHeight: "200px" }}
              />
            )}
          </div>
          <div className="lg:flex gap-4 items-center">
            <div className="space-y-2 w-full">
              <Label htmlFor="metaKeywords">Meta Keywords</Label>
              <Input
                id="metaKeywords"
                name="metaKeywords"
                value={seoData.metaKeywords}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2 w-full">
              <Label htmlFor="canonical">Canonical URL</Label>
              <Input
                id="canonical"
                name="canonical"
                value={seoData.metaCanonical}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
