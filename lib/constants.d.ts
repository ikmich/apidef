export declare const MANIFEST_FILENAME = "defapi-manifest.js";
export declare const CONFIG_FILENAME = "defapi-config.js";
export declare const API_DEF_FILENAME = "api.defapi.js";
export declare const DEFAULT_SRC_PATH = ".";
export declare const DEFS_DIR_NAME = "__defapi/current";
export declare const API_PATH_MANIFEST = "/defapi/manifest";
export declare const API_PATH_ENDPOINTS = "/defapi/endpoints";
export declare const API_PATH_ENDPOINTS_DL = "/defapi/endpoints/dl";
export declare const API_PATH_VIEW_DOCS = "/defapi/docs/view";
export declare const API_PATH_GENERATE_DEFS = "/defapi/defs/generate";
export declare const API_PATH_UPDATE_DEFS = "/defapi/defs/update";
export declare const excludedPaths: string[];
export declare const t_string = ":string";
export declare const t_number = ":number";
export declare const t_boolean = ":boolean";
export declare const t_object = ":object";
export declare const t_array = ":array";
export declare const t_json_string = ":json_string";
export declare const t_file = ":file";
export declare const SETTING_BASE_URI = "__defapi_baseUri";
export declare const SETTING_SRC_PATH = "__defapi_srcPath";
export declare const configKeys: {
    baseUri: string;
    srcPath: string;
    title: string;
    headers: string;
};