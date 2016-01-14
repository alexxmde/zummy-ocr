var shell = require("child_process").exec;

module.exports = function(){
	return {
		 //Properties.
		 scannerName: "",
		 imagesPath: __dirname + '/images/',
		 imageName: "temporary",
		 imageFormat: "tiff",
		 imageExtension: ".tiff",
		 getImagePathNameExtension: function(){ return this.imagesPath + this.imageName + this.imageExtension; },

		 //Methods.
	 	 scan: function(){
	 	 	console.log("Scanning... ");
			//Check if the Scanner Name is not unset!
			if(this.scannerName != undefined){

				//Build the scanimage command string.
				var command = "scanimage ";
				command += "--format ";
				command += this.imageFormat;
				command += " > ";
				command += this.getImagePathNameExtension();
				var that = this;
				//Execute the scan by sending a command to the kernel.
				shell(command, function( error, stdout ) {
				 
						if( error ) { 
						
						console.log(error);
						 	
						} else {
						
							console.log("Scanned to: " + that.getImagePathNameExtension());
							
							}
						});
				
			}
			
			
	}
			
			
}	 
	

}
