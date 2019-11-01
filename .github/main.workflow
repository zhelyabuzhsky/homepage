workflow "Run gcloud Login" {
  on = "push"
  resolves = "Setup Google Cloud"
}

action "Setup Google Cloud" {
  uses = "actions/gcloud/auth@master"
  secrets = ["GCLOUD_AUTH"]
}
