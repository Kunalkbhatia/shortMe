"use server"
import { auth } from "@/auth";
import prisma from "@/lib/db";
import { encodeBase62 } from "@/lib/utils";
import { Tag } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function shortURLBySlug(formData: FormData, tags: Tag[]) {
  const longURL = formData.get("longURL") as string;
  const name = formData.get("name") as string;
  let slug = formData.get("slug") as string;
  slug = slug.replace(/\s+/g, '');
  const session = await auth();

  try{
    const slugExist = await prisma.uRL.findFirst({
        where: {
          slug,
        },
      });
      if (slugExist) throw new Error("Slug already exist");
      await prisma.uRL.create({
        data: {
          longURL,
          slug,
          name,
          user: {
            connect: {
              id: session?.user?.id,
            },
          },
          tags: {
            connect: tags.map((tag) => ({ id: tag.id })),
          },
        },
      });
  } catch(error){
    if(error instanceof Error)return error.message;
    else return "Something went wrong";
  }
  revalidatePath("/");
}

export async function shortURL(formData: FormData, tags: Tag[]) {
  const longURL = formData.get("longURL") as string;
  const name = formData.get("name") as string;
  const session = await auth();

  try{
    const entry = await prisma.uRL.create({
        data: {
            longURL,
            name,
            tags: {
                connect: tags.map((tag) => ({id: tag.id}))
            },
            user: {
                connect: {
                    id: session?.user?.id
                }
            }
        }
      })
    
      const shortURL = encodeBase62(entry.id);
      await prisma.uRL.update({
        data: {
            shortURL: shortURL
        },
        where: {
            id: entry.id,
        }
      });
  } catch(error){
    if(error instanceof Error)return error.message;
    else return "Somethin Went wrong";
  }
  revalidatePath("/");
}
