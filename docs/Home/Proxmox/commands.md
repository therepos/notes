# Commands

### Network

Verify port usage. Replace 3017 with the targeted port number.
```bash
sudo ss -tuln | grep 3017
```

Change permission of filetypes
```bash
sudo chown root:toor *.m4a *.flac
sudo chmod 664 *.m4a *.flac
ls -l /mnt/sec/apps/music
```

List open files
```bash
lsof +D /mnt/sec/media/videos/upload/location
```

List Docker Container content
```bash
docker exec -it <container_name> /bin/bash
ls -lah /
```

Listen for file changes
```bash
inotifywait -m -r /mnt/sec/media/videos/upload/location
```

Print video format
```bash
docker exec -it ffmpeg ffprobe -v error -show_format -show_streams -i "/config/file.mp4" > /mnt/sec/media/videos/file_info.txt
```

Push to GHCR
```bash
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

Pull docker image
```bash
docker pull ghcr.io/therepos/pdfai:latest
```

Clone repo
```bash
git clone https://github.com/therepos/docker.git
cd docker/pdfai
```

Export folder from docker service
```bash
docker cp pdfai:/app /mnt/sec/apps/pdfai/export/app
```

Shows DEBUG log
```bash
docker logs pdfai 2>&1 | grep "DEBUG"
```

Alias
```bash
alias purgedockerct='bash -c "$(wget -qLO- https://github.com/therepos/proxmox/raw/main/tools/purge-dockerct.sh)"'
source ~/.bashrc
purgedockerct
# To remove
unalias purgedockerct
```

Show only lines containing "ERROR"
```bash
docker logs -f pdfai 2>&1 | grep ERROR

# Or use less to scroll/search
docker logs pdfai | less

# Or tail and grep
docker logs -f pdfai | grep -E 'ERROR|SyntaxError|Traceback'

```

