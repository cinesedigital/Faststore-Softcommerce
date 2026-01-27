const gutendexResolvers = {
  getGutendexBooks: async () => {
    console.log("%c getGutendexBooks", "font-size:1rem; margin: 20px 0 0 -8px; color: #EC8F33;");
    const url = `https://gutendex.com/books`;

    try {
      const response = await fetch(url);

      return response.json();
    } catch (error) {
      console.log("%c error: ", "margin-top: 6px; color: #7fffd4;", error);
    }
  },
};

export default gutendexResolvers;
