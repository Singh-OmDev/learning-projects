import { S3Client, GetObjectCommand , PutObjectCommand} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: "AKIA6ODUZ7FH6NDISP66",
    secretAccessKey: "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",
  },
});

async function getObjectURL(key) {
  const command = new GetObjectCommand({
    Bucket: "ombucket156",
    Key: key.trim(), // removes accidental space
  });

  const url = await getSignedUrl(s3Client, command);
  return url;
}

async function putObject(filename, contentType){
     const command = new PutObjectCommand ({
         Bucket: "ombucket156",
         Key:`uploads/user-uploads/$(filename)`,
          ContentType: contentType,


     });
      const url = await getSignedUrl (s3Client, command  );
      return url;
}

async function init() {
 const url = await getObjectURL("uploads/user-uploads/$(filename)");
  console.log("url for my jpg:", url);

  //console.log(
    //"URL for uploading a file",
     //await putObject(`image-${Date.now().jpeg}`, "image/jpeg")

  //)
  
}

init();