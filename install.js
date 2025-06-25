module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/VectorSpaceLab/OmniGen2 app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install gradio devicetorch",
          "uv pip install -r requirements.txt"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          // xformers: true
          triton: true
          // sageattention: true
        }
      }
    }
  ]
}
