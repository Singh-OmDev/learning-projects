package main
   
 import (
	 "context" 
	  "log"
	  "time"
	  pb "github.com/Omsingh/grpc-demo/proto"
 )

  func callSayHello (client pb.GreetServiceClient) {

	  ctx , cancel := context.WithTimeout ( context.Background (), time.Second) 
	   defer cancel ()

	    _, err := client.SayHello (ctx , &pb.NoParam{})

		 if err != nil {
			 log.Fatalf("could not greet: %v", err)
		 }	 
  }