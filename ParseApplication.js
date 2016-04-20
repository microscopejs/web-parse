// Imports
import {HttpApplication} from 'microscope-web';
import {ParseServer} from 'parse-server';

class ParseApplication extends HttpApplication {
	
	initialize(){
		this.app = new ParseServer({
			databaseURI: 'mongodb://mcsp:microscope@ds048878.mongolab.com:48878/microscope',
			appId: 'mcsp-parse',
			masterKey: 'mcsp-parse',
			serverURL: process.env.SERVER_URL || 'http://localhost:3000/parse',
		});
	}
}

export default ParseApplication;