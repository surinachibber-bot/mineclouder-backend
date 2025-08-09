import { exec } from "child_process";

export function startMinecraftServer({
  id,
  version = "1.20.4",
  type = "PAPER",
}: {
  id: number;
  version?: string;
  type?: string;
}): Promise<string> {
  const containerName = `minecloud-${id}`;
  const serverDir = `/data/servers/${id}`;
  const command = `
    docker run -d \
      --name ${containerName} \
      -v ${serverDir}:/data \
      -e EULA=TRUE \
      -e VERSION=${version} \
      -e TYPE=${type} \
      -p ${25565 + id}:25565 \
      itzg/minecraft-server
  `;

  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) return reject(stderr);
      resolve(stdout);
    });
  });
}
