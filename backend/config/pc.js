import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from 'dotenv';

dotenv.config();

const PINECONE_API_KEY = process.env.PINECONE_API_KEY;

const pc = new Pinecone({
  apiKey: PINECONE_API_KEY,
});

const indexName = 'articles';

const connectPC = async () => {
	try {
		await pc.createIndex({
      name: indexName,
      dimension: 1024, // Replace with your model dimensions
      metric: 'cosine', // Replace with your model metric
      spec: { 
        serverless: { 
          cloud: 'aws', 
          region: 'us-east-1' 
        }
      } 
    });
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); // process code 1 code means exit with failure, 0 means success
	}
};

export default connectPC;