export interface Game {
    id: number;
    title: string;
    genre: string;
    platform: string;
}

export interface FilterParams {
    platform?: string;
    category?: string;
    tags?: string[];
    sortBy?: 'release-date' | 'alphabetical' | 'relevance';
}