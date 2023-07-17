# Real ESR-GAN demo

## how to use this demo:
### Step1:
download model parameters from [here](https://drive.google.com/drive/folders/1iJTjjMStK_67vtqrlVTnwsc-6jR11DCj?usp=share_link "here") and put them in ```./package/web-eargan-shards```
### Step1:
```cd ./demo```
### Step2:
```npm install```
### Step3:
```npm start```
### Step4:
open browser and visit ```http://localhost:8000/demo.html```
## Interface for developers:
### Step1: specify dependecy in package.json
```    
"dependencies": {
        "real-esrgan": "../package"
    }
```
### Step2: in HTML source code, import the dependencies:
```
<script src="node_modules/real-esrgan/dist/tvmjs_runtime.wasi.js"></script>
<script src="node_modules/real-esrgan/dist/tvmjs.bundle.js"></script>
<script src="node_modules/real-esrgan/src/RealEsrgan.js"></script>
```
### Step3: in user's JS code, use the RealESRGAN Instance to generate:
#### 1. create a RealESRGANInstance
```
let localRealESRGANInst = new RealESRGANInstance();
```
#### 2. load image
```
localRealESRGANInst.loadImage(loadedImageData);
```
#### 3. generate
```
await localRealESRGANInst.generate();
```




