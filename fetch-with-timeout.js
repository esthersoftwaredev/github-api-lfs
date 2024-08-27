// abstracted function 
// let's imagine it looked like this
function fetchWithTimeout(url, timeout = 5000) { // default value just in case
  console.log(`Timeout set to: ${timeout}ms`); // where I would place it

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Request timed out')), timeout);

    fetch(url)
      .then(response => {
        clearTimeout(timer); 
        resolve(response);   
      })
      .catch(err => {
        clearTimeout(timer); 
        reject(err);        
      });
  });
}

// using the function 
// after imagining how it may have been written
fetchWithTimeout('https://placeholder.com/posts', 3000) // adding custom value
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));
