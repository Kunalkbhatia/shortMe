"use server";

import prisma from "@/lib/db";


export const getAnalytics = async (id: number) => {
    const analytics = await prisma.analytics.findFirst({
        where: {
            urlId: id,
        }
    })
    return analytics;
};
