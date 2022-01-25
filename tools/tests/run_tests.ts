import { resolve } from "path";
import { execa } from "execa";

const main = async () => {
  const packageName = process.argv[2];

  if (packageName == null) {
    process.stderr.write("No package name provided");
    process.exit(1);
  }

  const workingDir = resolve(__dirname, "../../", packageName);
  const testPath = resolve(workingDir, "test_jest.sh");

  const testChild = execa(testPath, [], {});

  await testChild;
};

main();
