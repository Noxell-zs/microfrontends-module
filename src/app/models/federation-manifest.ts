import defaultFederationManifest from '../../assets/federation.manifest.json';

export type FederationManifest = typeof defaultFederationManifest;
export type AnyFederationManifest = {[name: string]: string};
