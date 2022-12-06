# IDE (Editors)
Setup, configuration and customization of Integrated Development Environments.

* VS CODE
* Visual Studio
* IntelliJ

## 1. VS CODE
### 1.1 Extensions
**Programming Languages**
* C#
* GO
* Python, Pylance, isort
* WebAssembly

**Markup Languages**
* Yaml
* Markdown All in One

**CD/CI & Deployment**
* Docker, Dev Containers, Kubernetes

**Utilities**
* TODO Highlight
* Material Icon Theme

**Other**
* Jupyter

### 1.2 Configuration & Settings
**Material Icon Theme**
```JSON
{
    "material-icon-theme.files.associations": {
        "**.as.ts": "storybook",
    },
    "material-icon-theme.folders.associations": {
        "dev": "debug",
        "prod": "error",
        "assembly": "storybook",
        "wasm": "storybook",
    }
}
```