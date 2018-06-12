# salus

## Configuration

The default configuration file is located in the **conf** directory found
[here](./src/conf/default.json)

By adding a local configuration file, local.json, in the same location the
default values can be overridden.

### Example local configuration file

```json
{
  "services": {
    "gitea": {
      "filename": "gitea.tgz",
      "backups": ["C:/gitea/"]
    },
    "jenkins": {
      "filename": "jenkins.tgz",
      "backups": ["C:/app/jenkins/"]
    }
  }
}
```

This will add two backup services, **gitea** and **jenkins**.

The gitea service will tar up the directory **C:/gitea/** and download the file
as **gitea.tgz**.

## API endpoints

### ./services

GET returns the list of backup services

### ./services/:id

GET creates a backup of the service, **:id**, and downloads the tar file.
