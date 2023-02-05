export const VScroll = {
    mounted: (el, binding) => {
        const interactionCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { 
                    binding.value();
                    observer.unobserve(entry.target);
                }
            });
        };
        const interactionObserver = new IntersectionObserver(interactionCallback, {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        });
        interactionObserver.observe(el);
    }
};