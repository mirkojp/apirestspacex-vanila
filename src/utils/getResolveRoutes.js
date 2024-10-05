const resolveRoutes = (route) => {
    if (route.length === 0 || route === '/') {
        return route; // Handle root route
    }
    return `/:id`; // Treat all other non-root routes as ID routes
};

export default resolveRoutes;