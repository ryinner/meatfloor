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
            threshold: 0.1,
        });
        interactionObserver.observe(el);
    }
};