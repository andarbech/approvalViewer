npm run build
pac solution add-reference --path  C:\Users\Andres\source\repos\ApprovalViewerCustom\approvalViewer
msbuild /t:restore     
cd ..
msbuild
pac pcf push --publisher-prefix appr --force-import
cd .\Solution\