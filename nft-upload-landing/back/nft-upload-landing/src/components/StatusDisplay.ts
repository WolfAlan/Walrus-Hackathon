class StatusDisplay {
    private statusElement: HTMLElement;

    constructor(statusElementId: string) {
        this.statusElement = document.getElementById(statusElementId) as HTMLElement;
    }

    public updateStatus(message: string): void {
        this.statusElement.textContent = message;
    }

    public clearStatus(): void {
        this.statusElement.textContent = '';
    }
}

export default StatusDisplay;