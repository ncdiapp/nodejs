import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentDistributorId() {
  return 9929;
}

export function getRegularImageUrlById(fileId: any, uiId?: any) {
  let sessionId = process.env.ANONYMOUS_USER_SESSION_ID;
  let url =
    process.env.MGT_BASE_URL +
    "/GetRegularImage.aspx?FileId=" +
    fileId +
    "&CurrentUserSessionId=" +
    sessionId;

  return url;
}

export function getFileUrlById(fileId: any, isGetOriginal?: any, uiId?: any) {
  let sessionId = process.env.ANONYMOUS_USER_SESSION_ID;
  let url =
    process.env.MGT_BASE_URL +
    "/GetLatestFile.aspx?FileId=" +
    fileId +
    "&CurrentUserSessionId=" +
    sessionId;

  if (isGetOriginal) {
    url =
      process.env.MGT_BASE_URL +
      "/GetOriginal.aspx?FileId=" +
      fileId +
      "&CurrentUserSessionId=" +
      sessionId;
  }

  return url;
}
