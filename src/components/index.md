---

---

## Get Started

Install the [Miniforge distribution](https://github.com/conda-forge/miniforge):
```shell frame="none"
bash Miniforge3-MacOSX-arm64.sh
```

Create an environment with the name `arm64`:
```shell frame="none"
mamba create -n arm64 python=3.12 pandas pyarrow
```

Activate newly created environment:
```shell frame="none"
mamba activate arm64
```

Install other packages:
```shell frame="none"
pip install jupyterlab python-calamine xlsxwriter
```
