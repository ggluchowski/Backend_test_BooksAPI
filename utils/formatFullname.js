module.exports = (fullName) => {
  if(fullName === undefined) return 'Error';
  if(typeof(fullName) !== 'string') return 'Error';
  const tab = [ firstName, lastName ] = fullName.split(' ');
  if (tab.length !== 2) return 'Error';
  if(!firstName || !lastName) return false;

  const first = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const last = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()
  return  first + ' ' + last;
};
