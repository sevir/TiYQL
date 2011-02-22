// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


if (Titanium.Network.online){
	Titanium.Yahoo.yql(
		'select * from html where url = "http://www.todorelatos.com/categorias/" and xpath="//*[@id=\'AutoNumber23\']/tr/td/table/tr/td/strong/a"',
		function(e){
			try
		    {
		        Ti.API.info("Starting loop with YQL Query");
		        Ti.API.debug('Found YQL results data? ' + e.success);

		        if (e.message)
		        {
		            Ti.API.error('Error Message: ' + e.message);
		        }

				var enlaces = e.data.a;
		        Ti.API.info("tengo cosas");

				for (var x in enlaces){
					Ti.API.info(enlaces[x]["href"]);
				}
		    }
		    catch(E)
		    {
		        Titanium.API.error("Error = " + E);
		    }
		}
	);
}