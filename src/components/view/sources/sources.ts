import './sources.css';

export interface NewsSource {
    id: string;
    name: string;
}

class Sources {
    public draw(data: NewsSource[]): void {
        const fragment = document.createDocumentFragment();

        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement | null;

        if (!sourceItemTemp) {
            return;
        }

        data.forEach((item: NewsSource) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const nameElement = sourceClone.querySelector<HTMLElement>('.source__item-name');
            const itemElement = sourceClone.querySelector<HTMLElement>('.source__item');

            if (nameElement && itemElement) {
                nameElement.textContent = item.name;
                itemElement.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector<HTMLElement>('.sources');
        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;
