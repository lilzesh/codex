class Tabpanel extends HTMLElement {
    constructor() {
        super();
        this.sroot = this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.sroot.innerHTML = this.html();
    }

    html() {
        return `
            <div>
                <div role="tablist" aria-label="PLACEHOLDER">
                    <button id="tab-1" role="tab" aria-controls="panel-1" aria-selected="true" tabindex="0">
                        Tab 1
                    </button>
                    <button id="tab-2" role="tab" aria-controls="panel-2" aria-selected="false" tabindex="-1">
                        Tab 2
                    </button>
                    <button id="tab-3" role="tab" aria-controls="panel-3" aria-selected="false" tabindex="-1">
                        Tab 1
                    </button>
                </div>
                <div id="panel-1" role="region" aria-labelledby="tab-1">
                    <p>Panel 1 content</p>
                </div>
                <div id="panel-2" role="region" aria-labelledby="tab-2">
                    <p>Panel 2 content</p>
                </div>
                <div id="panel-3" role="region" aria-labelledby="tab-3">
                    <p>Panel 3 content</p>
                </div>
            </div>
        `;
    }
}

export default Tabpanel;
