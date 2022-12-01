<script>
import { h, resolveComponent } from "vue";
export default {
    props: {
        level: {
            type: Number,
            default: 1
        }
    },
    setup(props, context) {
        const headingId = getChildrenTextContent(context.slots.default()).toLowerCase().replace(/[^а-яА-Яa-zA-Z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        function getChildrenTextContent(children) {
            return children.map(node => {
                return typeof node.children === 'string'
                    ? node.children
                    : Array.isArray(node.children)
                        ? getChildrenTextContent(node.children)
                        : '';
            }).join('');
        }
        return () => h(
            `h${props.level}`,
            {
                id: headingId
            },
            [
                h(
                    resolveComponent('RouterLink'),
                    {
                        name: headingId,
                        to: {hash: `#${headingId}`},
                        class: context.attrs.class,
                    },
                    () => context.slots.default(),
                )
            ],
        );
    }
};
</script>