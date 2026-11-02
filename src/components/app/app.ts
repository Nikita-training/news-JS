import AppController from '../controller/controller';
import { AppView, NewsResponse, SourcesResponse } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesContainer = document.querySelector<HTMLElement>('.sources');

        if (sourcesContainer) {
            sourcesContainer.addEventListener('click', (e: Event) => {
                this.controller.getNews(e, (data: NewsResponse) => this.view.drawNews(data));
            });
        }

        this.controller.getSources((data: SourcesResponse) => this.view.drawSources(data));
    }
}

export default App;
