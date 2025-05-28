# Commands

### Network

Verify port usage. Replace 3017 with the targeted port number.
```js
sudo ss -tuln | grep 3017
```

Change permission of filetypes
```bash
#!/bin/bash

sudo chown root:toor *.m4a *.flac
sudo chmod 664 *.m4a *.flac
ls -l /mnt/sec/apps/music
```

List open files
```bash
lsof +D /mnt/sec/media/videos/upload/location
```

```bash
# List Docker Container content
docker exec -it <container_name> /bin/bash
ls -lah /
```

```bash
# Listen for file changes
inotifywait -m -r /mnt/sec/media/videos/upload/location
```

```bash
# Print video format
docker exec -it ffmpeg ffprobe -v error -show_format -show_streams -i "/config/file.mp4" > /mnt/sec/media/videos/file_info.txt
```

```bash
# Push to GHCR
GitHub > Settings > Developer Settings > Personal Access Tokens > Classic Token

echo <PAT> | docker login ghcr.io -u therepos --password-stdin
docker tag therepos/pdfai ghcr.io/therepos/pdfai:latest
docker push ghcr.io/therepos/pdfai:latest

docker logout ghcr.io
docker login ghcr.io --username therepos

docker build -t ghcr.io/therepos/pdfai:latest .
echo <PAT> | docker login ghcr.io -u therepos --password-stdin
docker push ghcr.io/therepos/pdfai:latest
```

```bash
# Pull docker image
docker pull ghcr.io/therepos/pdfai:latest
```

```bash
# Clone repo
git clone https://github.com/therepos/docker.git
cd docker/pdfai
```

```bash
# Export folder from docker service
docker cp pdfai:/app /mnt/sec/apps/pdfai/export/app
```

```bash
# Shows DEBUG log
docker logs pdfai 2>&1 | grep "DEBUG"
```

```bash
# Alias
alias purgedockerct='bash -c "$(wget -qLO- https://github.com/therepos/proxmox/raw/main/tools/purge-dockerct.sh)"'
source ~/.bashrc
purgedockerct
# To remove
unalias purgedockerct
```

```bash
# Show only lines containing "ERROR"
docker logs -f pdfai 2>&1 | grep ERROR

# Or use less to scroll/search
docker logs pdfai | less

# Or tail and grep
docker logs -f pdfai | grep -E 'ERROR|SyntaxError|Traceback'

```

