import { FC, useState } from "react"
import {
  ResourceCreatorPage,
  ResourceGeneratorProps,
} from "@/page/Dashboard/components/ResourceGenerator/interface"
import { Modal } from "@illa-design/modal"
import { useTranslation } from "react-i18next"
import { ResourceType } from "@/redux/resource/resourceState"
import { ResourceTypeSelector } from "@/page/Dashboard/components/ResourceGenerator/ResourceTypeSelector"
import { ResourceCreator } from "@/page/Dashboard/components/ResourceGenerator/ResourceCreator"
import { getResourceNameFromResourceType } from "@/utils/actionResourceTransformer"

export const ResourceGenerator: FC<ResourceGeneratorProps> = props => {
  const { visible, onClose } = props
  const [currentStep, setCurrentStep] = useState<ResourceCreatorPage>("select")

  const [currentResource, setCurrentResource] = useState<ResourceType | null>(
    null,
  )

  const { t } = useTranslation()

  let title
  switch (currentStep) {
    case "select":
      title = t("editor.action.form.title.select")
      break
    case "createResource":
      if (currentResource != null) {
        title = getResourceNameFromResourceType(currentResource)
      }
      break
  }

  return (
    <Modal
      w="696px"
      visible={visible}
      footer={false}
      closable
      withoutLine
      withoutPadding
      title={title}
      onCancel={() => {
        onClose()
        setCurrentStep("select")
        setCurrentResource(null)
      }}
    >
      {currentStep === "select" && (
        <ResourceTypeSelector
          onSelect={resourceType => {
            setCurrentStep("createResource")
            setCurrentResource(resourceType)
          }}
        />
      )}
      {currentStep === "createResource" && currentResource != null && (
        <ResourceCreator
          onBack={() => {
            setCurrentStep("select")
            setCurrentResource(null)
          }}
          onFinished={() => {
            setCurrentStep("select")
            setCurrentResource(null)
            onClose()
          }}
          resourceType={currentResource}
        />
      )}
    </Modal>
  )
}

ResourceGenerator.displayName = "ResourceGenerator"