import React from "react";
import { DocumentControls } from "@payloadcms/ui";
import { SetDocumentTitle } from "@payloadcms/ui";
import { DocumentFields } from "@payloadcms/ui";
import { RenderFields } from "@payloadcms/ui";

/**
 * Custom Edit/Create form layout
 * Can be used to customize the document form appearance
 * Pass this component path in payload.config.ts admin.components.views.edit.root.Component
 */
export const CustomEditView = ({
  data,
  previousData,
  actions,
  errors,
  fields,
  ...rest
}: any) => {
  return (
    <div className="space-y-6">
      {/* Document header with title */}
      <div className="flex items-start gap-4">
        <SetDocumentTitle
          data={data}
          previousData={previousData}
          actions={actions}
        />
      </div>

      {/* Main document fields area */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Left column - Main fields */}
        <DocumentFields
          // @ts-ignore - payload types
          data={data}
          previousData={previousData}
          actions={actions}
          // Customize which fields go to sidebar
          // @ts-ignore
          fieldIsSidebar={({ path }) => path === "seo" || path === "excerpt"}
        >
          <RenderFields {...rest} />
        </DocumentFields>

        {/* Right column - Document controls & metadata */}
        <div className="space-y-4">
          <DocumentControls
            // Customize toolbar actions
            customComponents={{
              // SaveButton: "@/components/admin/CustomSaveButton",
              // PublishButton: "@/components/admin/CustomPublishButton",
            }}
          />
          
          {/* Additional metadata or actions */}
          {/* <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              Last edited: {new Date(data.updatedAt).toLocaleString()}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};