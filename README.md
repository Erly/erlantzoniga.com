# erlantzoniga.com
My personal website

## CI/CD with GitHub Actions
This repo is configured to:
- Build the Docker image from the root `Dockerfile` on every push to `master` using a GitHub-hosted runner
- Push the image to `registry.erlantz.net` tagged as `latest` and with the commit SHA
- Deploy to a Kubernetes cluster by applying the manifests under `manifests/`

### Required GitHub Secrets
Create these repository secrets in GitHub:
- `REGISTRY_USERNAME` — username for `registry.erlantz.net`
- `REGISTRY_PASSWORD` — password or token for `registry.erlantz.net`
- `KUBE_CONFIG_B64` — base64-encoded kubeconfig for the target cluster/context

How to produce `KUBE_CONFIG_B64` (example):
```bash
# Use the kubeconfig/context you want the workflow to use
cat ~/.kube/config | base64 -w0
# Copy the output into the GitHub secret KUBE_CONFIG_B64
```

### Image and Kubernetes
- Image name: `registry.erlantz.net/erlantz-cv`
- Namespace: `erlantz`
- The workflow creates/updates an image pull secret named `regcred` in the `erlantz` namespace and patches the default service account to use it.
- After applying manifests, it updates the `Deployment/erlantz-cv` to use the freshly built image tagged with the commit SHA and waits for rollout.
