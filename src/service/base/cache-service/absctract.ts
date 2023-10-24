export abstract class AbstractCacheService {
  abstract get: (key: string) => any
  abstract add: (key: string, value: any) => void
  abstract remove: (key: string) => void
  abstract clear: (key: string) => void;
}
