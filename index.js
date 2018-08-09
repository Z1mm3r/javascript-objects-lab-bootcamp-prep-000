var recipes = {};

<<<<<<< HEAD
function updateObjectWithKeyAndValue(object,key,value)
{
  return Object.assign({},object,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value)
{
  return Object.assign(object,{[key]:value});
}

function deleteFromObjectByKey(object,key)
{
  var temp = Object.assign({},object);
  delete temp[key];
  return temp;
}

function destructivelyDeleteFromObjectByKey(object,key)
{
  delete object[key];
  return object;
}
=======
function updateObjectWithKeyAndValue(target)
>>>>>>> e35ef363cb112e1755f4e067eb3469585c4bf194
