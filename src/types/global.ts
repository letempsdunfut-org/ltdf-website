/**
 * Make K property optionnal inner T type
 *
 * @example
 * Assume we have this type
 * ```
 * type ExampleType = {
 *   propA: string,
 *   propB: string,
 * };
 * ```
 *
 * ```
 * type PartializedExample = PartialBy<ExampleType, 'propA'>;
 * ```
 * is equivalent to
 * ```
 * type PartializedExample = {
 *   propA?: string,
 *   propB: string,
 * };
 * ```
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
