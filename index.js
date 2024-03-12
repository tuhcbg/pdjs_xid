const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('oTKdUemGe3', uuidlib.v4());
	}

module.exports = generateId
