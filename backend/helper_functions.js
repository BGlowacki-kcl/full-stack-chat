import { hf } from './config/hf.js';

async function generateEmbedding(text) {
    const embedding = await hf.featureExtraction({
        model: "sentence-transformers/all-MiniLM-L6-v2",
        inputs: text,
    });
    return embedding[0];
}