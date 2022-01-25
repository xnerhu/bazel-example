import { copyFile, mkdir, stat } from "fs/promises";

export const pathExists = async (path: string) => {
  try {
    await stat(path);
  } catch (err) {
    return false;
  }

  return true;
};

export const ensureDir = async (...paths: string[]) => {
  await Promise.all(
    paths.map(async (path) => {
      if (!(await pathExists(path))) {
        await mkdir(path, { recursive: true });
      }
    }),
  );
};

export const ensureFile = async (dst: string, src: string) => {
  if (!(await pathExists(dst))) {
    await copyFile(src, dst);
  }
};

export const getFileSize = (path: string) => {
  return stat(path).then((r) => r.size);
};
