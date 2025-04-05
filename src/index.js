
const greet = (name = 'Developer') => {
    return `Hello, ${name}! Welcome to GitHub Actions.`;
  };
  
  const run = () => {
    const message = greet('GitHub User');
    console.log(message);
  };
  
  run();