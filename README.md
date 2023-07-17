# Real ESR-GAN demo

## how to use this demo:
### Step1:
```cd ./demo```
### Step2:
```npm start```
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




